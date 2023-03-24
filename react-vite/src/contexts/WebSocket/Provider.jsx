import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Constants from '../../constants/index';
import EnvironmentUtilities from '../../utilities/EnvironmentUtilities';
import ApiConfiguration from '../../configurations/ApiConfiguration';
import LocalStorageUtilities from '../../utilities/LocalStorageUtilities';
import WebSocketContext from './Context';

const wsStates = Constants.WebSocket.States;
const wsMessageTypes = Constants.WebSocket.MessageTypes;

const WebSocketProvider = ({ children }) => {
  const [webSocketState, setWebSocketState] = useState(wsStates.NotConnected);

  const [messageTypeData, setMessageTypeData] = useState([]);
  const [messageType2Data, setMessageType2Data] = useState([]);

  const wsRef = useRef();

  const contextValueWrapper = useMemo(
    () => (
      {
        webSocketState,
        messageTypeData,
        messageType2Data,
      }
    ),
    [webSocketState, messageTypeData, messageType2Data],
  );

  const setMessageByType = (dataType, data) => {
    switch (dataType) {
      case wsMessageTypes.NameOfMessageType:
        setMessageTypeData(data);
        break;
      case wsMessageTypes.NameOfMessageType2:
        setMessageType2Data(data);
        break;
      default:
        if (EnvironmentUtilities.isDebug()) {
          // eslint-disable-next-line no-console
          console.warn('WebSocket -> Unknown message type:', dataType);
        }
        break;
    }
  };

  const connectWs = () => {
    setWebSocketState(wsStates.Connecting);
    const wssUrl = ApiConfiguration.getBaseUrl(ApiConfiguration.service1Wss).concat(`/ws?token=${LocalStorageUtilities.userToken()}`);
    wsRef.current = new WebSocket(wssUrl);

    wsRef.current.onopen = () => {
      if (EnvironmentUtilities.isDebug()) {
        // eslint-disable-next-line no-console
        console.log('WebSocket -> Socket Open');
      }
      setWebSocketState(wsStates.Open);
    };

    wsRef.current.onmessage = e => {
      const socketMessage = JSON.parse(e);
      if (EnvironmentUtilities.isDebug()) {
        // eslint-disable-next-line no-console
        console.log('WebSocket -> Message received: ', socketMessage);
      }
      setMessageByType(socketMessage.type, socketMessage.data);
    };

    wsRef.current.onerror = e => {
      if (EnvironmentUtilities.isDebug()) {
        // eslint-disable-next-line no-console
        console.error('WebSocket -> An error occured: ', e);
      }
    };

    wsRef.current.onclose = e => {
      if (EnvironmentUtilities.isDebug()) {
        // eslint-disable-next-line no-console
        console.log('WebSocket -> Socket closed : ', e);
      }
      setWebSocketState(wsStates.Closed);
    };
  };

  useEffect(() => {
    if (webSocketState === wsStates.NotConnected) connectWs();
    return () => {
      if (wsRef.current && wsRef.current.readyState === wsStates.Open) {
        wsRef.current.close();
      }
    };
  }, []);

  return (
    <WebSocketContext.Provider value={contextValueWrapper}>
      {children}
    </WebSocketContext.Provider>
  );
};

WebSocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WebSocketProvider;
