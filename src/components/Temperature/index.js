import useTemp from "../../hooks/useTemp";
const Temperature = ({ temperature }) => {
    const temp = useTemp(temperature);
    return temp;
}

export default Temperature