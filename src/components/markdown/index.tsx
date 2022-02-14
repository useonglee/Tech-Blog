import React from 'react';
import ReactMarkdown from 'react-markdown';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

function Markdown({ content }: Props) {
  const components: Partial<NormalComponents & SpecialComponents> = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');

      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          PreTag="div"
          language={match[1]}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code {...props}>{children}</code>
      );
    },
  };

  return (
    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}

export default Markdown;
