export const APP_STRINGS = {
  intro: `Flexbox is React Native's core layout system — it's how you arrange and size components on screen. Unlike CSS on the web, RN defaults flexDirection to column (not row), since that's more natural for mobile screens.`,
  flex: {
    title: "Flex",
    children: `how much space a component takes relative to its siblings.`,
    buttonTitle: "Go to flex Screen",
  },
  flexDirection: {
    title: "Flex Direction",
    children: `It controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.`,
    buttonTitle: "Go to flex Direction Screen",
  },
  layoutDirection: {
    title: "Layout Direction",
    children: `Layout direction specifies the direction in which children and text in a hierarchy should be laid out. Layout direction also affects what edge start and end refer to. By default, React Native lays out with LTR layout direction. In this mode start refers to left and end refers to right.`,
    buttonTitle: "Go to Direction Screen",
  },
  justifyContent: {
    title: "Justify Content",
    children: `It describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with flexDirection set to row or vertically within a container with flexDirection set to column.`,
    buttonTitle: "Go to justify content Screen",
  },
  alignItem: {
    title: "Align Items",
    children: `It describes how to align children along the cross axis of their container. It is very similar to justifyContent but instead of applying to the main axis, alignItems applies to the cross axis.`,
    buttonTitle: "Go to Align Item Screen",
  },
  alignSelf: {
    title: "Align Self",
    children: `alignSelf has the same options and effect as alignItems but instead of affecting the children within a container, you can apply this property to a single child to change its alignment within its parent. alignSelf overrides any option set by the parent with alignItems.`,
    buttonTitle: "Go to Align Self Screen",
  },
  alignContent: {
    title: "Align Content",
    children: `alignContent defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using flexWrap.`,
    buttonTitle: "Go to Align Content Screen",
  },
  flexWrap: {
    title: "Flex Wrap",
    children: `The flexWrap property is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed.When wrapping lines, alignContent can be used to specify how the lines are placed in the container.`,
    buttonTitle: "Go to flex wrap Screen",
  },
  flexBasics: {
    title: "Flex Basics, Grow and Shrink",
    children: `1.flexBasis is an axis-independent way of providing the default size of an item along the main axis. Setting the flexBasis of a child is similar to setting the width of that child if its parent is a container with flexDirection: row or setting the height of a child if its parent is a container with flexDirection: column. The flexBasis of an item is the default size of that item, the size of the item before any flexGrow and flexShrink calculations are performed.

2.flexGrow describes how much space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children.

flexGrow accepts any floating point value >= 0, with 0 being the default value. A container will distribute any remaining space among its children weighted by the children’s flexGrow values.

3.flexShrink describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis. flexShrink is very similar to flexGrow and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together by allowing children to grow and shrink as needed.

flexShrink accepts any floating point value >= 0, with 0 being the default value (on the web, the default is 1). A container will shrink its children weighted by the children’s flexShrink values.
`,
    buttonTitle: "Go to it's example Screen",
  },
  rowGap: {
    title: "Row Gap, Column Gap and Gap",
    children: `1.rowGap sets the size of the gap (gutter) between an element's rows.

2.columnGap sets the size of the gap (gutter) between an element's columns.

3.gap sets the size of the gap (gutter) between rows and columns. It is a shorthand for rowGap and columnGap.`,
    buttonTitle: "Go to it's example Screen",
  },
  widthAndheigh: {
    title: "Width and Height",
    children: `The width property specifies the width of an element's content area. Similarly, the height property specifies the height of an element's content area.`,
    buttonTitle: "Go to widht and height Screen",
  },
};
