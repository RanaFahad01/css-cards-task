import "@mantine/core/styles.css";
import { MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Title order={1}>Testing deployment!</Title>
    </MantineProvider>
  );
}
