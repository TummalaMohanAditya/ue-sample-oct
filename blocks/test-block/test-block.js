export default function decorate(block) {
  [...block.children].forEach((row, index) => {
    row.classList.add(index === 0 ? 'test-block-heading' : 'test-block-content');
  });

  block.querySelectorAll('.test-block-content > div > ul, .test-block-content > div > ol').forEach((list) => {
    list.classList.add('test-block-stories');
    [...list.children].forEach((item) => item.classList.add('test-block-story'));
  });
}
