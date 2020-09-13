import React from 'react'
import { List, Pagination, Skeleton } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

import { fetchNews } from '../slice'
import { IMatch, ILocation } from '../types'
import { IArticle } from '../../../api/types'
import styles from '../styles.module.css'

type NewsLineProps = {
  match: IMatch,
  location: ILocation,
  data: IArticle[],
  isLoading: boolean,
  fetchNews: (page: number, location: ILocation) => any
}

export class NewsLine extends React.Component<NewsLineProps> {
  state = { page: 0 };
  componentDidMount() {
    this.props.fetchNews(this.state.page, this.props.location)
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.location !== this.props.location || prevState.page !== this.state.page)
      this.props.fetchNews(this.state.page, this.props.location)
  }
  render() {
    return (
      <div className={styles.mainLine}>
        <List
          loading={this.props.isLoading}
          className={styles.newsLine}
          dataSource={this.props.data}
          itemLayout="vertical"
          size="large"
          renderItem={item => (
            <>
              <Skeleton loading={this.props.isLoading} active>
                <List.Item
                  key={item.id}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src={item.image === 'None' ? 'https://brilliant24.ru/files/cat/bg_template_01.png' : item.image}
                    />
                  }
                >

                  <List.Item.Meta
                    title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
                    description={item.description}
                  />

                </List.Item>
              </Skeleton>
            </>

          )}
        />
        <Pagination
          onChange={(page) => this.setState({ page: page })}
          defaultCurrent={1}
          total={50}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  data: state.news.data,
  isLoading: state.news.isLoading
});
const mapDispatchToProps = (dispatch: any) => ({
  fetchNews: (page: number, location: ILocation) => dispatch(fetchNews({
    page: page,
    endpoint: location.search === '' ? 'latest-news' : 'search',
    searchParams: location.search
  }))

});
export default connect(mapStateToProps, mapDispatchToProps)(NewsLine);
// export default NewsLine;
