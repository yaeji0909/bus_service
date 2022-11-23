import styled, { css } from "styled-components";
import { useRef } from "react";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";
import { useRecoilValue } from "recoil";
import { favBusStopList } from "@recoil/favorites";
import Skeleton from "@components/common/Skeleton";
import media from "@lib/styles/media";

const BottomSheetBodySkeleton = () => {
  const favoriteBusStopList = useRecoilValue(favBusStopList);
  const bottomBody = useRef(null);

  return (
    <Wrapper>
      <BottomSheetBodyBox ref={bottomBody}>
        {favoriteBusStopList &&
          favoriteBusStopList.map((list, index) => (
            <FavoriteListWrapperBox key={index}>
              <FavoriteList onlyBusStop={!list.bus ? true : ""}>
                <Skeleton className='title-skeleton' marginRight='3rem' />
                <Skeleton className='button-skeleton' />
                <Skeleton className='sub-title-skeleton' />
                {list.bus && <Skeleton className='contents-box-skeleton' />}
              </FavoriteList>
            </FavoriteListWrapperBox>
          ))}
      </BottomSheetBodyBox>
    </Wrapper>
  );
};

const FavoriteListWrapperBox = styled.div`
  padding: 0.5rem;
`;

const FavoriteList = styled.div`
  width: 100%;
  height: 20vh;
  box-shadow: 0px 4px 15px rgba(65, 97, 119, 0.2);
  border-radius: 10px;
  position: relative;
  padding: 0.8rem;
  ${(props) =>
    props.onlyBusStop &&
    css`
      height: 10vh;
      }
    `}

  .title-skeleton {
    padding: 0.9rem;
    ${media.xxsmall} {
      width: 45vw;
    }
  }

  .sub-title-skeleton {
    width: 55vw;
    margin: 0;
    margin-top: 0.1rem;
    padding: 0.7rem;
    ${media.xsmall} {
      width: 60vw;
    }
  }

  .button-skeleton {
    width: 16vw;
    padding: 0.9rem;
    ${media.xsmall} {
    }
  }

  .contents-box-skeleton {
    margin: 0;
    width: 80vw;
    padding: 2.5rem;
    ${media.xsmall} {
    }
  }
`;

export default BottomSheetBodySkeleton;
