# digi-Altar

**digi-Altar** is a cyber spiritual space, where you can create, share, and inspire your own altar using a hybrid mix of relics and artifacts.

[Deployed](https://digialtar.netlify.app/)

<br>

## MVP

The **digi-Altar** MVP will include an interactive homepage, the shared collection of user's unique altars, the log-in/log-out functionality, saving created altars to users, and the art of creating a digi-Altar. 

<br>

### Goals

- _Creating a website that allows users to sign in/out and create/update/delete their altars._
- _Only signed in users can create an artshrine or they can create an account._
- _Having an interactive image interface._
- _The collection page will show the public sanctuaries to all users._
- _The users have the option to hide/publicize their altars to the collection._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | A free and open-source front-end JavaScript library for building user interfaces or UI components, maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.  |
|   React Router + Dom  | React Router is a collection of navigational components that compose declaratively with your application and enables you to implement dynamic routing in a web app |
|  Ruby on Rails   | A Ruby server-side web application and a model–view–controller framework, providing default structures for a database, a web service, and web pages. |
|  React DnD | React DnD is a set of React utilities to help you build complex drag and drop interfaces while keeping your components decoupled. |
|  Axios | Axios is a simple promise based HTTP client for the browser and node.js.  |
|  bcrypt() | bcrypt() is a sophisticated and secure hash algorithm designed by The OpenBSD project for hashing passwords. The bcrypt Ruby gem provides a simple wrapper for safely handling passwords. |
|  JWT | A ruby implementation of the RFC 7519 OAuth JSON Web Token (JWT) standard. |


<br>

### Client (Front End)

#### Wireframes

![Desktop](https://i.imgur.com/i6RrEWb.png)

Desktop View

![Tablet](https://i.imgur.com/0FQJKfS.png) 

Tablet View

![Mobile](https://i.imgur.com/PqibOc8.png)

Mobile View

#### Component Tree

![Component Tree Sample](https://i.imgur.com/bMVI9Xo.png)


#### Component Architecture



``` structure

src
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Header (logo-home)
          |__Header.jsx
          |__Header.css
      |__ Footer (Nav)
          |__Footer.jsx
          |__Footer.css
      |__ Layout
          |__Layout.jsx
          |__Layout.css
      |__ AltarCard
          |__ProductCard.jsx
          |__ProductCard.css
      |__ AltarForm
          |__AltarForm.jsx
          |__AltarForm.css
      |__ Headline
          |__Headline.jsx
          |__Headline.css
      |__ InputFields
          |__InputFields.jsx
          |__InputFields.css
      |__ Button
          |__Button.jsx
          |__Button.css
      |__ DraggableHome
          |__Draggable.jsx
          |__Draggable.css
      |__ DraggableAltar
          |__DraggableAltar.jsx
          |__DraggableAltar.css          
      |__ LoginForm
          |__LoginForm.jsx
          |__LoginForm.css
|__ screens/
      |__ Home
          |__Home.jsx
          |__Home.css
      |__ Collection
          |__Collection.jsx
          |__Collection.css
      |__ AltarDetail
          |__AltarDetail.jsx
          |__AltarDetail.css
      |__ Login
          |__Login.jsx
          |__Login.css
      |__ Signup
          |__PostsDetail.jsx
          |__PostsDetail.css
      |__ AltarForm (create/edit)
          |__AltarForm.jsx
          |__AltarForm.css
      |__ UserAltars
          |__UserAltars.jsx
          |__UserAltars.css
      |__ About
          |__About.jsx
          |__About.css

|__ containers/
      |__ MainContainer
          |__MainContainer.jsx
          |__MainContainer.css
|__ services/
      |__ auth.js
      |__ apiConfig.js
      |__ images.js
      |__ altars.js
|__ utils/
      |__ sort.js
      |__ draggable.js 
```

#### Time Estimates


| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------  | :------: | :------------: | :-----------: | :---------: |
| Wireframe + Diagrams |    M     |     3 hrs      |     5 hrs     |    5 hrs    |
| CRUD Routes + Models |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
|    Authentication    |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| !Seed Data (+Images) |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Connect FrontEnd API |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
|   Create Components  |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
|    Create Screens    |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
|  Make AltarForm+Card |    H     |     6 hrs      |     3 hrs     |    3 hrs    |
| Complete Dragdrog.js |    H     |     3 hrs      |     5 hrs     |    6 hrs    |
| Style+ Functionality |    H     |     6 hrs      |     3 hrs     |    4 hrs    |
| TOTAL                |          |    39 hrs      |    34 hrs     |    36 hrs   |



<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/8BepqIK.png)
<br>

***

## Post-MVP

- Adding more mobile functionality / Create an App. Make the image library larger or admin rights on images could be added.

***

## Code Showcase

<br>

```

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      async drop(image, monitor) {
        if (dragDisabled) return;

        if (image.id) {
          const delta = monitor.getDifferenceFromInitialOffset();
          const left = Math.round(image.left + delta.x);
          const top = Math.round(image.top + delta.y);
          moveBox(image.id, left, top);
          await updateImage(image.id, {
            left: left,
            top: top,
            image_type: image.imageType,
            altar_id: altar.id,
          });

          setToggleFetch((prevState) => !prevState);
        } else {
          const offset = monitor.getClientOffset();
          let x = offset.x;
          let y = offset.y;
      
          x -= containerDiv.current.getBoundingClientRect().left;
          y -= containerDiv.current.getBoundingClientRect().top;
          (async () => {
            let data = await createImage({
              left: x,
              top: y,
              image_type: image.imageType,
              altar_id: altar.id,
            });
            createBox(data.id, x, y, image.imageType);
            setToggleFetch((prevState) => !prevState);
          })();
        }

        return undefined;
      },
    }),
    [moveBox]
  );


```

## Code Issues & Resolutions

<br>

