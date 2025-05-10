import { BASE_GRAY, BASE_WHITE, SHADOW_BLACK } from "../../styles/colors";

export const style = {
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    background: BASE_WHITE,
    border: `1px solid ${BASE_GRAY}`,
    borderRadius: "8px",
    padding: "16px",
    boxShadow: `0 2px 8px 2px ${SHADOW_BLACK}`,
  },
  cardLine: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: "10px",
  },
  cardLabel: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};
