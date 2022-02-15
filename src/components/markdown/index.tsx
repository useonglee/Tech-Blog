import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { NormalComponents } from 'react-markdown/lib/complex-types';
import { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';
import useMounted from '@hooks/useMounted';

interface Props {
  content: string;
}

function Markdown({ content }: Props) {
  const isMounted: boolean = useMounted();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const components: Partial<NormalComponents & SpecialComponents> = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return inline ? (
        // 강조 (``)
        <code
          style={{
            background: 'var(--bg-inline-code)',
            padding: '0.2rem 0.4rem',
            fontSize: '90%',
          }}
          {...props}
        >
          {children}
        </code>
      ) : match ? (
        // 코드 (```)
        <SyntaxHighlighter
          style={{
            background: 'var(--bg-inline-code)',
          }}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <SyntaxHighlighter
          style={{
            background: 'var(--bg-inline-code)',
          }}
          language="textile"
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    },
    // 인용문 (>)
    blockquote({ node, children, ...props }) {
      return (
        <div
          style={{
            backgroundColor: 'var(--blockquote)',
            padding: '1px 15px',
            borderLeft: `5px solid #6667AB`,
          }}
          {...props}
        >
          {children}
        </div>
      );
    },
    // img({ node, ...props }) {
    //   return (
    //     <img
    //       style={{ maxWidth: '60vw' }}
    //       src={props}
    //       alt="MarkdownRenderer__Image"
    //     />
    //   );
    // },
  };

  // useEffect(() => {
  //   setIsDarkMode(localStorage.getItem('theme') === 'dark');
  // }, [isDarkMode]);

  console.log(isDarkMode);

  return (
    <>
      {isMounted && (
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      )}
    </>
  );
}

export default Markdown;
