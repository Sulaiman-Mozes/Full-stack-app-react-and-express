import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  },
};

const dateDisplay = dateString => new Date(dateString).toDateString();

const Article = (props) => {
  const { article, store: { lookupAuthor } } = props;
  const author = lookupAuthor(article.authorId);
  const { lastName, firstName, website } = author;
  return (
    <div>
      <br />
      <div style={styles.article}>
        <div style={styles.title}>{article.title}</div>
        <div style={styles.date}>{dateDisplay(article.date)}</div>
        <div style={styles.author}>
          <a href={website}>
            {`${firstName} ${lastName}`}
          </a>
        </div>
        <div style={styles.body}>{article.body}</div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  store: PropTypes.shape({
    lookupAuthor: PropTypes.func.isRequired,
  }).isRequired,
};


export default storeProvider(Article);
