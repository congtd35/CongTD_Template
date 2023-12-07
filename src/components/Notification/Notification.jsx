import {Bell} from "./NotificationStyled";
import {Dropdown} from "antd";
import {useEffect, useState} from "react";
const Notification = () => {
    const [open,setOpen] = useState(false);
    const [items,setItems] = useState([]);

    useEffect(() => {
        let index = 0;
        const items = [];
        while (index <= 4) {
            index ++;
            items.push({
                key: index,
                label: `Thông báo ${index}`
            })
        }
        setItems(items);
    }, []);
    return <Dropdown
        menu={{
            items,
        }}
        placement="bottom"
        arrow
        open={open}
    >
        <Bell onClick={() => setOpen(!open)} />
    </Dropdown>
};

export default Notification;