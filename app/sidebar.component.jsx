class SideBar extends React.Component {
    render() {
        return <div className="sidebar-wrapper">
            <ul className="nav">
                <li className="active">
                    <a href="dashboard.html">
                        <i className="material-icons">dashboard</i>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a href="./user.html">
                        <i className="material-icons">person</i>
                        <p>User Profile</p>
                    </a>
                </li>
                <li>
                    <a href="./table.html">
                        <i className="material-icons">content_paste</i>
                        <p>Table List</p>
                    </a>
                </li>
                <li>
                    <a href="./typography.html">
                        <i className="material-icons">library_books</i>
                        <p>Typography</p>
                    </a>
                </li>
                <li>
                    <a href="./icons.html">
                        <i className="material-icons">bubble_chart</i>
                        <p>Icons</p>
                    </a>
                </li>
                <li>
                    <a href="./maps.html">
                        <i className="material-icons">location_on</i>
                        <p>Maps</p>
                    </a>
                </li>
                <li>
                    <a href="./notifications.html">
                        <i className="material-icons text-gray">notifications</i>
                        <p>Notifications</p>
                    </a>
                </li>
                <li className="active-pro">
                    <a href="upgrade.html">
                        <i className="material-icons">unarchive</i>
                        <p>Upgrade to PRO</p>
                    </a>
                </li>
            </ul>
        </div>
    }
}

ReactDOM.render(
    <SideBar/>,
    document.getElementById('sidebar')
);
