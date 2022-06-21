import { Link } from 'react-router-dom';
import { React, Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class PageNotFound extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleShow = () => this.setState({ show: true });
  handleClose = (fromModal) => {
    this.setState({
      show: false,
    });
  };
  componentDidMount() {
    this.setState({
      show: true,
    });
  }
  render() {
    return (
      <>
        {this.state.show ? (
          <div>
            <Modal className="error"
              show={this.state.show}
              onHide={() => this.handleClose({ msg: 'Cross Icon Clicked!' })}
            >
              <Modal.Header closeButton>404</Modal.Header>
              <Modal.Body>
                <h1 style={{ color: 'red', fontSize: 20 }}>Error</h1>
                <h3>Please enter a valid search!</h3>
                <img className="error-photo" src="https://thumbs.dreamstime.com/z/cartoon-bodyguard-stop-cartoon-illustration-bodyguard-holding-up-stop-sign-135524686.jpg" alt=""/>
                <p className='home' style={{ fontSize: 15 }}>
                  <Link style={{ color: 'black' }} to='/'>
                    Home
                  </Link>
                 
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant='danger'
                  onClick={() => this.handleClose({ msg: 'Modal Closed!' })}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : null}
      </>
    );
  }
}
export default PageNotFound;