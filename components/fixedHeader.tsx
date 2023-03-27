export default function FixedHeader() {
  return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <div className="mdl-layout__header">
                <div className="mdl-layout__header-row">

                <div className="mdl-layout-title">Title</div>

                <div className="mdl-layout-spacer"></div>

                <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                </nav>
                </div>
            </div>
            <div className="mdl-layout__drawer">
                <div className="mdl-layout-title">Title</div>
                <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                <a className="mdl-navigation__link" href="">Link</a>
                </nav>
            </div>
        </div>
  );
}
