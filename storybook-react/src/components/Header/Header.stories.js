import {fn} from 'storybook/test'

import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    showButton: { control: "boolean" },
    buttonLabel: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Header padrão",
    subtitle: "Subtítulo do header",
    showButton: true,
    buttonLabel: "Botão",
  },
};

export const WithoutButton = {
  args: {
    title: "Header sem botão",
    subtitle: "Somente texto",
    showButton: false,
  },
};

export const OnlyTitle = {
  args: {
    title: "Apenas título",
    showButton: false,
  },
};