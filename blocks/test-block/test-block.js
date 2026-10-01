export default function decorate(block) {
  [...block.children].forEach((row, index) => {
    row.classList.add(index === 0 ? 'test-block-heading' : 'test-block-content');
  });
}
