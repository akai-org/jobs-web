import styled from "styled-components";

const ListingItem = styled.div`
  box-shadow: 0 0 10px #0001;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  /* justify-content: space-around; */

  .bar {
    background: lime;
    width: 20px;
    height: 100%;
    position: absolute;
  }

  img {
    margin: 0 40px;
  }

  h4 {
    margin: 0;
  }

  .metadata {
    font-size: 14px;

    > span {
      &::after {
        content: "·";
        margin: 0 6px;
      }

      &:last-child::after {
        content: "";
      }
    }
  }

  .salary {
    color: green;
  }

  .skill {
    border: 1px solid;
    color: grey;
    border-radius: 40px;
    padding: 5px 10px;
  }
`;

export default ListingItem;
