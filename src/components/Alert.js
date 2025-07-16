import React, { useEffect, useState } from 'react';

function Alert({ alert }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alert) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alert]);

  const capitalized = (word) => {
    if (word === "danger") word = "Error";
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      {alert && show && (
        <div className="custom-alert">
          <strong>{capitalized(alert.type)}</strong>: {alert.msg}
          <div className="alert-progress"></div>
        </div>
      )}

      <style>{`
        .custom-alert {
          position: fixed;
          top: 1rem;
          right: 1rem;
          background-color: #fefefe;
          color: #333;
          border-left: 5px solidrgb(23, 241, 7);
          padding: 1rem 1.5rem;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.15);
          z-index: 1050;
          animation: slideIn 0.3s ease, fadeOut 0.3s ease 1.8s forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        .alert-progress {
          height: 4px;
          background-color: #0d6efd;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          animation: progressShrink 2s linear forwards;
        }

        @keyframes progressShrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </>
  );
}

export default Alert;
