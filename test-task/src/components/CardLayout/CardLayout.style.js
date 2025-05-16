import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { BASE_BLACK, BASE_GRAY, SHADOW_BLACK } from "../../styles/colors";

export const style = {
  mainContainer: {
    margin: "auto",
    maxWidth: "1200px",
    width: "100%",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
    padding: "15px",
  },
  buttonWrapper: {
    display: "flex",
    gap: "8px",
    justifyContent: "flex-center",
    margin: "10px",
  },
  button: {
    padding: "8px 12px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "6px",
    border: `"1px solid  ${BASE_GRAY}`,
  },
  searchInput: {
    marginLeft: "10px",
    border: `2px solid  ${BASE_GRAY}`,
    borderRadius: "3px",
  },
};
