import './index.css'

export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="global-footer"
    >
      <div>© {currentYear} 面试刷题网站</div>
      <div>by Ant Design</div>
    </div>
  );
}

        //   if (props?.collapsed) return undefined
        //   return (
        //     <div
        //       style={{
        //         textAlign: 'center',
        //         paddingBlockStart: 12,
        //       }}
        //     >
        //       <div>© 2021 Made with love</div>
        //       <div>by Ant Design</div>
        //     </div>
        //   )