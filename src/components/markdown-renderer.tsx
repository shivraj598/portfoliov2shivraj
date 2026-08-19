import ReactMarkdown from "react-markdown";

export function MarkdownRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-[22px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mt-8 mb-4 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-[18px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mt-8 mb-3 first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight mt-6 mb-2 first:mt-0">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 my-4 first:mt-0 last:mb-0">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-current transition-colors"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 my-4 space-y-1.5 text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 my-4 space-y-1.5 text-[14px] sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="marker:text-zinc-400">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4 py-0.5 my-4 italic text-zinc-500 dark:text-zinc-400">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-8 border-zinc-200 dark:border-zinc-800" />,
          code: ({ className, children }) => {
            const isBlock = /language-/.test(className || "");
            if (isBlock) {
              return (
                <code className="block font-mono text-[13px] leading-relaxed text-zinc-200">
                  {children}
                </code>
              );
            }
            return (
              <code className="px-1.5 py-0.5 rounded-[4px] bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-[13px] font-mono text-zinc-800 dark:text-zinc-200">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="my-4 p-4 rounded-lg bg-zinc-950 border border-black/10 dark:border-white/10 overflow-x-auto">
              {children}
            </pre>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}