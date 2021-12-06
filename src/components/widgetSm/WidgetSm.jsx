import { Visibility } from '@material-ui/icons'
import './widgetSm.css'

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Daniel Denzel</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility  className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Daniel Denzel</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Daniel Denzel</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Daniel Denzel</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://i.ibb.co/LZm6JQb/khalid.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Daniel Denzel</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm