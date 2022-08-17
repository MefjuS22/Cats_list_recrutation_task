import InfiniteScroll from "react-infinite-scroll-component";
import { BackToTheTop } from "./BackToTheTop";
import { CatList } from "./CatList";
import { useCats } from "./CatsContext";

export const CatListWithScroll = () => {
  const { cats, getMore, hasMore } = useCats();

  return (
    <InfiniteScroll
      dataLength={cats.length}
      next={getMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<BackToTheTop />}
    >
      <CatList />
    </InfiniteScroll>
  );
};
