import React, { useState } from 'react';
import { Select, Button, Modal } from 'flowbite-react';

const ModalEvent = (props) => {
  const { show, setShow } = props;

  const onClick = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <Modal show={show} onClose={onClose}>
        <Modal.Header>Edit Event</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-between w-full items-center">
            <Button style={{ background: '#F46A6A' }} onClick={onClose}>
              Delete
            </Button>{' '}
            <div className="flex justify-between">
              <Button color="gray" onClick={onClose} style={{ marginRight: 5 }}>
                Close
              </Button>

              <Button style={{ background: '#34C38F' }} onClick={onClose}>
                Save
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalEvent;
