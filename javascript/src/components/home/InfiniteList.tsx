import InfiniteScroll from "react-infinite-scroller";
import { ListItem } from "./HomeItemList";
import { List, Spin } from "antd";
import React from "react";
import { Person } from "../../api/person";

const baseSize = 10;

interface InfiniteListState {
  allPeople: Person[];
  displayedPeople: Person[];
  hasMore: boolean;
  loading: boolean;
}

interface InfiniteListProps {
  people: Person[];
}

const createStateFromProps = (props: InfiniteListProps): InfiniteListState => ({
  allPeople: props.people,
  displayedPeople: props.people.filter((el, index) => index < baseSize),
  hasMore: props.people.length >= baseSize,
  loading: false
});

export class InfiniteList extends React.Component<
  InfiniteListProps,
  InfiniteListState
> {
  constructor(props: InfiniteListProps) {
    super(props);
    this.state = createStateFromProps(props);
  }

  static getDerivedStateFromProps(
    props: InfiniteListProps,
    state: InfiniteListState
  ) {
    // Only update the state on new props
    if (props.people !== state.allPeople) {
      return createStateFromProps(props);
    }
    return null;
  }

  handleInfiniteOnLoad = () => {
    this.setState({
      loading: true
    });
    const currentSize = this.state.displayedPeople.length;
    if (currentSize === this.state.allPeople.length) {
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.setState({
      displayedPeople: this.state.allPeople.filter(
        (el, index) => index < currentSize + baseSize
      ),
      loading: false
    });
  };

  render = () => (
    <InfiniteScroll
      initialLoad={false}
      pageStart={0}
      loadMore={this.handleInfiniteOnLoad}
      hasMore={!this.state.loading && this.state.hasMore}
      useWindow={true}
    >
      <List
        itemLayout="horizontal"
        dataSource={this.state.displayedPeople}
        renderItem={item => <ListItem {...item} />}
      >
        {this.state.loading && this.state.hasMore && (
          <div className="demo-loading-container">
            <Spin />
          </div>
        )}
      </List>
    </InfiniteScroll>
  );
}
