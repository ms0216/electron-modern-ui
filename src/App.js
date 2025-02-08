import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { countries } from './constants';

import AlertComponent from './components/inputs/Alert';
import AutocompleteComponent from './components/inputs/Autocomplete';
import ButtonComponent from './components/inputs/Button';
import CheckboxComponent from './components/inputs/Checkbox';
import FabComponent from './components/inputs/Fab';
import RadioGroupComponent from './components/inputs/RadioGroup';
import RatingComponent from './components/inputs/Rating';
import SelectComponent from './components/inputs/Select';
import SliderComponent from './components/inputs/Slider';
import SwitchComponent from './components/inputs/Switch';
import TextFieldComponent from './components/inputs/TextField';

import ProgressComponent from './components/feedback/Progress';
import SnackbarComponent from './components/feedback/Snackbar';

import AvatarComponent from './components/data_display/Avatar';
import BadgeComponent from './components/data_display/Badge';
import ChipComponent from './components/data_display/Chip';
import DividerComponent from './components/data_display/Divider';
import ListComponent from './components/data_display/List';
import TooltipComponent from './components/data_display/Tooltip';
import TypographyComponent from './components/data_display/Typography';

import AccordionComponent from './components/surfaces/Accordion';
import AppBarComponent from './components/surfaces/AppBar';
import CardComponent from './components/surfaces/Card';
import PaperComponent from './components/surfaces/Paper';

import GridComponent from './components/layout/gridv2';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const menuItems = ['Profile', 'My account', 'Logout'];
  const radioOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const listItems = [
    'List Item 1',
    'List Item 2',
    'List Item 3',
    'List Item 4',
    'List Item 5',
  ];
  const tabs = [
    { label: 'Item One', content: 'Item One' },
    { label: 'Item Two', content: 'Item Two' },
    { label: 'Item Three', content: 'Item Three' },
  ];

  const ac = new AutocompleteComponent();
  const alert = new AlertComponent();
  const bt = new ButtonComponent();
  const cb = new CheckboxComponent();
  const fab = new FabComponent();
  const rg = new RadioGroupComponent();
  const rt = new RatingComponent();
  const sel = new SelectComponent();
  const sl = new SliderComponent();
  const sw = new SwitchComponent();
  const tf = new TextFieldComponent();

  const pr = new ProgressComponent();
  const sb = new SnackbarComponent();

  const av = new AvatarComponent();
  const bd = new BadgeComponent();
  const ch = new ChipComponent();
  const dv = new DividerComponent();
  const ls = new ListComponent();
  const tt = new TooltipComponent();
  const tp = new TypographyComponent();

  const acc = new AccordionComponent();
  const app = new AppBarComponent();
  const ca = new CardComponent();
  const pp = new PaperComponent();

  const gr = new GridComponent();

  const autocomplete = ac.createAutocomplete('Country', countries);

  const successAlert = alert.createSuccessAlert('Success', 'This is a success alert.');
  const errorAlert = alert.createErrorAlert('Error', 'This is an error alert.');
  const warningAlert = alert.createWarningAlert('Warning', 'This is a warning alert.');
  const infoAlert = alert.createInfoAlert('Info', 'This is an info alert.');

  const button = bt.createButton('Button', null, { variant: 'contained', color: 'primary' });
  const button_snackbar = bt.createButton('Show Snackbar', handleSnackbarOpen, { variant: 'contained', color: 'primary' });

  const checkbox = cb.createCheckbox('Checkbox');

  const fabButton = fab.createFab('Add');

  const radioGroup = rg.createRadioGroup('Radio Group', radioOptions);

  const rating = rt.createRating('Rating');

  const select = sel.createSelect('Select', countries);

  const slider = sl.createSlider('Slider');

  const switc = sw.createSwitch('Switch');

  const passwordField = tf.createPasswordField('Password');
  const textField = tf.createTextField('Text Field');
  const multilineField = tf.createMultilineField('Multiline Field');
  const numberField = tf.createNumberField('Number Field');

  const circularProgress = pr.createCircularProgress();
  const linearProgress = pr.createLinearProgress();

  const snackbar = sb.createSnackbar('Snackbar message', 'Close!', snackbarOpen, handleSnackbarClose);

  const avatar = av.createAvatar('Remy Sharp', '/static/images/avatar/1.jpg');

  const badge = bd.createBadge(4, 'primary', <MailIcon />);

  const chip = ch.createChip('Chip Filled');

  const divider = dv.createDivider('fullWidth', 'horizontal');

  const list = ls.createList(listItems);

  const title = tp.createTypography('Electron + React + Material UI', {variant: 'h2', Component: 'h1'});
  
  const tooltip = tt.createTooltip('Tooltip title',
    <IconButton aria-label="delete">
      <MailIcon />
    </IconButton>
  );
  
  const typography = tp.createTypography('Typography', {variant: 'h2'});

  const accordion1 = acc.createAccordion(
    tp.createTypography('Accordion 1').element,
    tp.createTypography('Content for Accordion 1.').element
  );

  const accordion2 = acc.createAccordion(
    tp.createTypography('Accordion 2').element,
    tp.createTypography('Content for Accordion 2.').element
  );

  const appbar = app.createAppBar(
    tp.createTypography('App Bar Component', {variant: 'h6', style: { flexGrow: 1 }}).element,
    menuItems,
    anchorEl,
    handleMenu,
    handleClose
  );

  const card = ca.createCard(
    tp.createTypography('Card Title', {variant: 'h5', component: 'div'}).element,
    tp.createTypography('Card Subtitle', {color: 'textSecondary'}).element,
    tp.createTypography('Card Content', {variant: 'body2'}).element
  );

  const paper = pp.createPaper(
    tp.createTypography('Paper Title', {variant: 'h5', component: 'div'}).element,
    tp.createTypography('Paper Content', {variant: 'body2'}).element
  );

  const grid = gr.createGrid(
    <Grid item xs={12} sm={6}>
      {paper.element}
    </Grid>
  );

  return (
    <Container>
      {appbar.element}
      
      {title.element}
      
      {button_snackbar.element}

      {tooltip.element}

      {grid.element}

      {radioGroup.element}

      {chip.element}
      
      {list.element}

      {card.element}

      {successAlert.element}
      {errorAlert.element}
      {warningAlert.element}
      {infoAlert.element}

      {autocomplete.element}

      {button.element}

      {checkbox.element}

      {fabButton.element}

      {rating.element}

      {select.element}

      {slider.element}

      {switc.element}
      
      {passwordField.element}
      {textField.element}
      {multilineField.element}
      {numberField.element}

      {circularProgress.element}
      {linearProgress.element}

      {snackbarOpen && snackbar.element}

      {avatar.element}

      {badge.element}

      {divider.element}

      {typography.element}
    
      {accordion1.element}
      {accordion2.element}

    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
