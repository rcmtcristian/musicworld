const TableView = () => {
  return (
    <main className="artist-table-container">
      <div className="flex items-center justify-end">
        <h1 className="text-2xl font-bold">Artist</h1>
        <div className="flex items-center gap-x-4">
          <div className="line"></div>
          <table className="Content-table">
            <caption>Artist/Music List</caption>
            <thead>
              <tr>
                <th rowSpan={2} scope="col">
                  Name
                </th>
                <th colSpan={2} scope="col">
                  Artist Found
                  <br />
                  (AF)
                </th>
                {/* <th rowSpan="2" scope="col">
                 People who like The main song might also like these artists.
                </th> */}
              </tr>
              <tr>
                <th scope="col">
                  People who like the main song/artist might also like these suggestions{' '}
                </th>
                {/* <th scope="col">EF-Scale</th> */}
              </tr>
            </thead>
            <tbody>
              {/* start of description */}
              <tr>
                <td data-th="Rating" className="scale_0" title="Light damage">
                  The japanese house
                </td>
                {/* <td data-th="F-Scale">&lt;&thinsp;73</td>
                <td data-th="EF-Scale">65&mdash;85</td> */}
                <td data-th="Typical Damage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum!
                </td>
              </tr>
              <tr>
                <td data-th="Rating" className="scale_1" title="Moderate damage">
                  1
                </td>
                {/* <td data-th="F-Scale">73&mdash;112</td>
                <td data-th="EF-Scale">86&mdash;110</td> */}
                <td data-th="Typical Damage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum!
                </td>
              </tr>
              <tr>
                <td data-th="Rating" className="scale_2" title="Considerable damage">
                  2
                </td>
                {/* <td data-th="F-Scale">113&mdash;157</td>
                <td data-th="EF-Scale">111&mdash;135</td> */}
                <td data-th="Typical Damage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum!
                </td>
              </tr>
              <tr>
                <td data-th="Rating" className="scale_3" title="Severe damage">
                  3
                </td>
                {/* <td data-th="F-Scale">158&mdash;206</td>
                <td data-th="EF-Scale">136&mdash;165</td> */}
                <td data-th="Typical Damage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum!
                </td>
              </tr>
              <tr>
                <td data-th="Rating" className="scale_4" title="Devastating damage">
                  4
                </td>
                {/* <td data-th="F-Scale">207&mdash;260</td>
                <td data-th="EF-Scale">166&mdash;200</td> */}
                <td data-th="Typical Damage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum!
                </td>
              </tr>
              <tr>
                <td data-th="Rating" className="scale_5" title="Incredible damage">
                  5
                </td>
                {/* <td data-th="F-Scale">261&mdash;318</td>
                <td data-th="EF-Scale">&gt;&thinsp;200</td> */}
                <td data-th="Typical Damage">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                  optio, eaque rerum!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default TableView
