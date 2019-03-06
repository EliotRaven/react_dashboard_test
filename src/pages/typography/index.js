import React from 'react'

class Typography extends React.Component {
  render() {
    return (
      <div className="typography">
        <div className="row pb-5">
          <div className="col-12 col-xl-6 pb-5">
            <div className="card">
              <div className="card-body">
                <h2>Headers</h2>
                <ul>
                  <li><h1>h1. <span>Bootstrap</span> heading</h1></li>
                  <li><h2>h2. <span>Bootstrap</span> heading</h2></li>
                  <li><h3>h3. <span>Bootstrap</span> heading</h3></li>
                  <li><h4>h4. <span>Bootstrap</span> heading</h4></li>
                  <li><h5>h5. <span>Bootstrap</span> heading</h5></li>
                  <li><h6>h6. <span>Bootstrap</span> heading</h6></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 pb-5">
            <div className="card">
              <div className="card-body">
                <h2>Paragraphs</h2>
                <ul>
                  <li><p className="h1">&lt;p class="h1"&gt;&lt;/p&gt;</p></li>
                  <li><p className="h2">&lt;p class="h2"&gt;&lt;/p&gt;</p></li>
                  <li><p className="h3">&lt;p class="h3"&gt;&lt;/p&gt;</p></li>
                  <li><p className="h4">&lt;p class="h4"&gt;&lt;/p&gt;</p></li>
                  <li><p className="h5">&lt;p class="h5"&gt;&lt;/p&gt;</p></li>
                  <li><p className="h6">&lt;p class="h6"&gt;&lt;/p&gt;</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-12 col-xl-6 pb-5">
            <div className="card">
              <div className="card-body">
                <blockquote className="blockquote">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <blockquote className="blockquote text-right">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>

          </div>
          <div className="col-12 col-xl-6 pb-5">
            <div className="card">
              <div className="card-body">
                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                <p><del>This line of text is meant to be treated as deleted text.</del></p>
                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                <p><u>This line of text will render as underlined</u></p>
                <p><small>This line of text is meant to be treated as fine print.</small></p>
                <p><strong>This line rendered as bold text.</strong></p>
                <p><em>This line rendered as italicized text.</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {Typography}