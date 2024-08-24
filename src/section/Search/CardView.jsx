import { Box, Tabs, Tab } from "@mui/material"
import { Park, Bed, CastleTurret, SwimmingPool, Treepalm, Umbrella } from "@phosphor-icons/react"
import PropTypes from "prop-types"
import Properties from "./Properties";

CardView.propTypes = {
    value: PropTypes.number,
    handleChangeTab: PropTypes.func,
    view: PropTypes.string,
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            { value === index && <Box sx={{ py: 3 }}>{chi1dren}</Box>}
    </div >
)
}
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}
export default function CardView(props) {
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={props.value}
                    onchange={props.handleChangeTab}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile >
                    <Tab label="National parks" icon={<Park size={20} />} />
                    <Tab icon={<CastleTurret size={20} />} label="Castle" />
                    <Tab icon={<Umbrella size={20} />} label="Beach" />
                    <Tab icon={<Treepalm size={20} />} label="Tropical" />
                    <Tab icon={<Bed size={20} />} label="Rooms" />
                    <Tab icon={<SwimmingPool size={20} />} label="Amazing Pool" />
                </Tabs>
            </Box>
            <CustomTabPanel value={props.value} index={0}>
                    <Properties view={props.view}/>
            </CustomTabPanel>
            <CustomTabPanel value={props.value} index={1}>
                    {/* <Properties /> */}
            </CustomTabPanel>
            <CustomTabPanel value={props.value} index={2}>
                    <Properties />
            </CustomTabPanel>
            <CustomTabPanel value={props.value} index={3}>
                    {/* <Properties /> */}
            </CustomTabPanel>
            <CustomTabPanel value={props.value} index={4}>
                    <Properties />
            </CustomTabPanel>
            <CustomTabPanel value={props.value} index={5}>
                    <Properties />
            </CustomTabPanel>
        </Box>
    )
}
