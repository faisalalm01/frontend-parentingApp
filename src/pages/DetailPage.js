import React from 'react';
import { useParams } from 'react-router-dom';

import DetailArticle from '../components/article/DetailArticle';

import { getArticle } from '../utils/data-article';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      article: getArticle(props.id)
    };
  }

  render() {
    if (this.state.article === null) {
      return <p>Tidak ada artikel</p>;
    }

    return (
      <section>
        <DetailArticle {...this.state.article} />
      </section>
    );
  }
}

export default DetailPageWrapper;
