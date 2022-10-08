import { LayoutFile } from '.';

const download = (layoutFile: LayoutFile) => {
  const a = document.createElement("a")
  a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(layoutFile.content))
  a.setAttribute('download', layoutFile.filename);
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export { download }