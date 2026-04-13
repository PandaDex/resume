export type PropertySection = {
  type: 'property';
  name: string;
  itemType: string;
  value: string;
  isTexture?: boolean;
};

export type ListSection = {
  type: 'list';
  name: string;
  itemType: string;
  items: ListItem[];
};

export type ListItem = {
  title: string;
  url?: string;
}

export type DictionarySection = {
  type: 'dictionary';
  name: string;
  keyType: string;
  valueType: string;
  items: { key: string; value: string }[];
};

export type Section = PropertySection | ListSection | DictionarySection;

export const portfolioData = {
  className: "UserProfile",
  properties: [
    {
      name: "ProfilePic",
      type: "Texture",
      value: '/textures/ui/sample.vtex',
      isTexture: true,
    },
    {
      name: "Name",
      type: "string",
      value: "Kacper Wochniak"
    },
    {
      name: "Role",
      type: "string",
      value: "Game Programmer"
    },
    {
      name: "Email",
      type: "string",
      value: "kacper.wochniak@kypebot.ovh"
    }
  ],
  sections: [
    {
      type: 'dictionary' as const,
      name: "Locations",
      keyType: "string",
      valueType: "string",
      items: [
        { key: "Poland", value: "Spawn point" },
        { key: "Austria", value: "Current residence" }
      ]
    },
    {
      type: 'list' as const,
      name: "Languages",
      itemType: "string",
      items: [ { title: "Polish" }, { title: "English" }]
    },
    {
      type: 'list' as const,
      name: "Skills",
      itemType: "string",
      items: [
        { title: "Unreal Engine" },
        { title: "Unity Engine" },
        { title: "s&box Engine" },
        { title: "C#" },
        { title: "JavaScript" },
        { title: "Java" },
        { title: "C++" },
        { title: "Git" },
        { title: "PlasticSCM" }
      ]
    },
    {
      type: 'list' as const,
      name: "Projects",
      itemType: "string",
      items: [
        {title: "TeamSpeak Overlay (C++/QT6)", url: "https://github.com/PandaDex/TeamSpeak-6-Overlay"},
        {title: "Eyes Of The Elderwood (C++/UE Blueprint)", url: "https://store.steampowered.com/app/3963050/Eyes_Of_The_ElderWood"},
        {title: "KES Engine (C++) Work In Progress", url: "https://github.com/PandaDex/kes-engine"},
        {title: "This Resume (JS/Html/Svelte)", url: "https://github.com/PandaDex/resume"}
      ]
    }
  ]
};
