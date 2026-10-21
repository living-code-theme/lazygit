// This port owns its application mappings. Inputs come only from the pinned local palette.


const lazygit = {
files: (f) => [{
    path: `${f.slug}.yml`,
    content: `gui:
  theme:
    activeBorderColor:
      - "${f.r("borderActive")}"
      - bold
    inactiveBorderColor:
      - "${f.r("border")}"
    searchingActiveBorderColor:
      - "${f.r("match")}"
      - bold
    optionsTextColor:
      - "${f.c("steel")}"
    selectedLineBgColor:
      - "${f.c("surface0")}"
    inactiveViewSelectedLineBgColor:
      - "${f.r("bgAlt")}"
    cherryPickedCommitFgColor:
      - "${f.r("bg")}"
    cherryPickedCommitBgColor:
      - "${f.c("orchid")}"
    markedBaseCommitFgColor:
      - "${f.r("bg")}"
    markedBaseCommitBgColor:
      - "${f.c("amber")}"
    unstagedChangesColor:
      - "${f.r("removed")}"
    defaultFgColor:
      - "${f.r("fg")}"
    authorColors:
      "*": "${f.c("aqua")}"
`,
  }]
};

export function generate(flavors) {
  return [...flavors.flatMap(f => lazygit.files(f)), ...(lazygit.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
