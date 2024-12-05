import { Meta, StoryFn } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'Pages/Input', // Name of the Story header which you see in browser
  component: InputComponent,  // Name of the component
  argTypes: {
    label: { control: 'text' }, // here label should be text so it is define in control
    placeholder: { control: 'text' },  // here color should be four value that's why provided the value in options property
    value: { control: 'text'},
    isDisabled: { control: 'boolean'}
},
} as Meta<InputComponent>;  // this line suggest that it is configuration of InputComponent


const Template: StoryFn<InputComponent> = (args) => {
    const componentState = {
      props: {
        ...args,
      },
    };
    (componentState.props as any).isDisabled = args.isDisabled;
    return componentState;
  };

// const Template: StoryFn<InputComponent> = (args: InputComponent) => ({
//     props: {
//       ...args, 
//     },
//   });

export const Default = Template.bind({});  // this is my first story where i could define args like that 
Default.args = {
    label: "Name",  
    placeholder: "Enter Your Name" , 
    value: "",
    isDisabled: false
};


export const FilledValue = Template.bind({})
FilledValue.args = {
    label: "Name",  
    placeholder: "Enter Your Name" , 
    value: "Mohit",
    isDisabled: false
}

export const FilledValueDisabled = Template.bind({})
FilledValueDisabled.args = {
    label: "Name",  
    placeholder: "Enter Your Name" , 
    value: "Mohit",
    isDisabled: true
}