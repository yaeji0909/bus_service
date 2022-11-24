import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { useCallback, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { searchBusStop } from "@api/busServiceApi";
import React from "react";
import { favBusStopList, selectedCity } from "@recoil/main";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import busStop from "@static/images/bus-stop.png";

const SearchInput = React.lazy(() =>
  import("@components/search/SearchInput.jsx")
);

const SearchResult = React.lazy(() =>
  import("@components/search/SearchResult.jsx")
);

const SearchPage = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const city = useRecoilValue(selectedCity);
  const favoriteBusStopList = useRecoilValue(favBusStopList);

  const { data: searchListData = [], isSuccess } = useQuery(
    ["searchBusStop", searchKeyword],
    () => searchBusStop(city, searchKeyword),
    {
      enabled: !!searchKeyword && !!city,
    }
  );

  const busStopIdFromFavList = favoriteBusStopList?.map((e) => e.station);

  useEffect(() => {
    if (isSuccess) {
      setSearchResult(searchListData);
    }
  }, [searchListData]);

  const onSearch = useCallback((keyword) => {
    console.log(keyword);
    setSearchKeyword(keyword);
  }, []);

  return (
    <>
      <Helmet>
        <title>search page</title>
      </Helmet>
      <SearchInputBox>
        <ArrowBackIosIcon onClick={() => navigate(-1)} />
        <SearchInput searchAsYouType onSearch={onSearch} />
        <CancelIcon
          className='cancel-btn'
          onClick={() => setSearchKeyword("")}
        />
      </SearchInputBox>
      <SearchContentsBox>
        {searchKeyword ? (
          searchResult.map((el, index) => (
            <SearchResult
              busStopIdFromFavList={busStopIdFromFavList}
              resultList={el}
              query={searchKeyword}
              key={index}
            />
          ))
        ) : (
          <BeforeSearch>
            <img src={busStop} alt='bus-stop-img' />
          </BeforeSearch>
        )}
      </SearchContentsBox>
    </>
  );
};
const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid #8c8d96;
  position: relative;
  svg {
    color: #8c8d96;
    font-size: 1.5rem;
  }
  .cancel-btn {
    color: #a6a6a6;
    font-size: 1.5rem;
    position: absolute;
    right: 3%;
  }
`;

const SearchContentsBox = styled.ul`
  width: 100%;
`;

const BeforeSearch = styled.div`
  position: absolute;
  left: 25%;
  top: 30%;
`;

export default SearchPage;
