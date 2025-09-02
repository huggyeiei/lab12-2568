import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarProps  {
  userName: string;
  type?: "admin" |"student";
}
export type { SidebarProps };
export default function Sidebar({userName}: SidebarProps) {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>
        <Group>
          <Indicator
            color = "red"
            offset = {4} withBorder
            position = "bottom-end"
            size = "15"
            inline
          >
              <Avatar
                size = "42"
                radius = "xl"
                src= "/mypic.jpg"
              />
            </Indicator>
            <Text>{userName}</Text>
        </Group>
        
      </Box>
    </Stack>
  );
}