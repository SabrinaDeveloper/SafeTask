import React from 'react';
import { Alert } from 'react-bootstrap';

/**
 * Componente para mostrar mensagens de feedback ao usuário.
 * Props:
 * - message: texto da mensagem
 * - variant: tipo de alerta (ex: 'success', 'danger')
 */
const FeedbackMessage = ({ message, variant }) => (
  message ? (
    <Alert variant={variant || 'success'} className="mt-3">
      {message}
    </Alert>
  ) : null
);

export default FeedbackMessage;
