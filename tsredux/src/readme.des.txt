starts with index.tsx in src directory
loads App component from components directory
--App component imports store from state directory
to enable the access of redux-store to all components, we provide store at
 top level component, in App component itself.
In App component, RepositoriesList component is rendered 
it sets a state var term to its default value ' '. for use in form
--RepositoriesList.tsx returns a form and logical rendering of 
 error loading symbol if not, mapped data
 event.preventDefaultis called to prevent page auto
  reload 
RepositoriesList ----- useTypedSelector
RepositoriesList has onSubmit func. which by default takes event as a parameter
 in HTMLformElement type.
 onSubmit calls searchRepositories func. with the props term.
----------------------------------------------------------------
--action-types defines an enum ActionType which contains types of actions, just a property having name, to be used in actions file
--actions defines usable interfaces with either type  or both with payload data
 actions exports a type Action which is further used as type of redux actions
