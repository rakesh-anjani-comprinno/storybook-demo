import { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Pages/Button', // Name of the Story header which you see in browser
  component: ButtonComponent,  // Name of the component
  argTypes: {
    label: { control: 'text' }, // here label should be text so it is define in control
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'danger'] },  // here color should be four value that's why provided the value in options property
  },
} as Meta<ButtonComponent>;  // this line suggest that it is configuration of ButtonComponent

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({   // We need to fetch Button component by send args value as props
  props: args,
});

export const Primary = Template.bind({});  // this is my first story where i could define args like that 
Primary.args = {
  label: 'Primary Button',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success Button',
  color: 'success',
};

export const danger = Template.bind({});
danger.args = {
    label: 'Danger BUtton',
    color:"danger"
}

export const random = Template.bind({})