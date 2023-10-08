import styled from "styled-components";

export const TableWrapper = styled.div`
  background-color: var(--bg-accent);
  padding-top: 13px;
  height: 568px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
  }
`;

export const TableContainer = styled.div`
  max-width: 280px;
  display: flex;
  justify-content: center;
  margin: 11px auto 0;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 336px;
    margin: 0 32px 0 auto;
  }
  @media screen and (min-width: 1280px) {
    max-width: 393px;
    margin: 0 auto 0 18px;
  }
`;

export const Table = styled.table`
  width: 100%;
  display: table-column;
`;

export const TableHead = styled.thead`
  background-color: var(--nav-inactive);
  color: var(--bg-light);
  font-family: "Circe";
  font-size: 18px;
  line-height: 26px;
  display: flex;
  border-radius: 30px 30px 0px 0px;
  padding: 11px 17px 12px 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 336px;
    padding-right: 25px;
  }

  @media screen and (min-width: 1280px) {
    padding: 17px 64px 16px 44px;
  }
`;

export const TableFirstRow = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TableBody = styled.tbody`
  background-color: var(--nav-active);
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--bg-light);
  font-family: "Circe";
  line-height: 23px;
  padding: 12px 20px 52px 20px;
  border-radius: 0px 0px 30px 30px;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 56px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 61px 179px 58px;
  }
`;

export const ImageWrapper = styled.div`
  img {
    padding-top: 12px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media screen and (min-width: 1280px) {
      padding-top: 50px;
    }
  }
`;

export const TableNextRows = styled.tr`
  display: flex;
  justify-content: space-between;
`;
