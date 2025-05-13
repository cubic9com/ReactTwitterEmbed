import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function ReactTwitterEmbed({ url }) {
  const containerRef = useRef(null);
  ReactTwitterEmbed
  useEffect(() => {
    if (!url || !containerRef.current) return;

    import('postscribe')
      .then(({ default: postscribe }) => {
        const embedHtml = `
          <blockquote class="twitter-tweet">
            <a href="${url}"></a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        `;
        postscribe(containerRef.current, embedHtml);
      })
      .catch((error) => {
        console.error('Failed to load postscribe:', error);
      });
  }, [url]);

  return <div ref={containerRef} />;
}

ReactTwitterEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ReactTwitterEmbed;
