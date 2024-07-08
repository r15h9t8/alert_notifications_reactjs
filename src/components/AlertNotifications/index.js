// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const renderSuccessMessage = () => (
  <Notification>
    <div className="alert-message-content">
      <AiFillCheckCircle className="icon success-icon" />
      <h1 className="heading success">Success</h1>
    </div>
    <p className="description">You can access all the files in the folder</p>
  </Notification>
)

const renderErrorMessage = () => (
  <Notification>
    <div className="alert-message-content">
      <RiErrorWarningFill className="icon error-icon" />
      <h1 className="heading error">Error</h1>
    </div>
    <p className="description">
      Sorry, you are not authorized to have access to delete the file
    </p>
  </Notification>
)

const renderWarningMessage = () => (
  <Notification>
    <div className="alert-message-content">
      <MdWarning className="icon warning-icon" />
      <h1 className="heading warning">Warning</h1>
    </div>
    <p className="description">
      Viewers of this file can see comments and suggestions
    </p>
  </Notification>
)

const renderInfoMessage = () => (
  <Notification>
    <div className="alert-message-content">
      <MdInfo className="icon info-icon" />
      <h1 className="heading info">Info</h1>
    </div>
    <p className="description">Anyone on the internet can view these files</p>
  </Notification>
)

const AlertNotifications = () => (
  <div className="alter-notification-container">
    <h1 className="alert-heading">Alert Notifications</h1>
    {renderSuccessMessage()}
    {renderErrorMessage()}
    {renderWarningMessage()}
    {renderInfoMessage()}
  </div>
)

export default AlertNotifications
