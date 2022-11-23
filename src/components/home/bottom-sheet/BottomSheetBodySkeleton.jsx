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
                <SkeletonRowBox>
                  <Skeleton className='title-skeleton' marginRight='3rem' />
                  <Skeleton className='button-skeleton' />
                </SkeletonRowBox>

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
  ${media.large} {
    width: 50vw;
  }
`;

const FavoriteList = styled.div`
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
    padding: 0.8rem;
    width: 50%;
    ${media.large} {
      width: 30%;
    }
  }

  .sub-title-skeleton {
    width: 70%;
    margin: 0;
    margin-top: 0.1rem;
    padding: 0.7rem;
  }

  .button-skeleton {
    width: 25%;
    padding: 0.9rem;
  }

  .contents-box-skeleton {
    width: 100%;
    margin: 0;
    padding: 2.5rem;
  }
`;

const SkeletonRowBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BottomSheetBodySkeleton;
