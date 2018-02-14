import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import CloseButton from 'material-ui-icons/Close';
import ModalContainer from "./HTML/ModalContainer";
import Link from "./Link";
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 30 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


class ModalPopup extends React.Component {

    render() {
        const {  open, content, onClose } = this.props;

        return (

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={onClose}
                >
                    <ModalContainer style={getModalStyle()}>
                        <CloseButton onClick={onClose}/>
                        <Typography variant="title" id="modal-title">
                            {content}
                        </Typography>
                        <Typography variant="subheading" id="simple-modal-description">
                            <Link button>test</Link>
                        </Typography>

                    </ModalContainer>
                </Modal>
        );
    }
}

ModalPopup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default ModalPopup;