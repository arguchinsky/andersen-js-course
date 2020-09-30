# Andersen JS Course

Репозиторий с задачами для курса Andersen JS. Вам необходимо сделать fork этого репозитория, чтобы начать работу над задачами в рамках курса.

## Перед запуском
1. Установите NodeJS (версию Current) - https://nodejs.org/en/
2. Установите Yarn - https://yarnpkg.com/ru/
3. Если вы еще не поставили себе редактор кода, то можете поставить VSCode - https://code.visualstudio.com/
4. Для удобства разработки вам понадобятся плагины для ESlint (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) и Prettier (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Подготовка к запуску
* Находясь в папке с проектом выполните в консоле команду `yarn`. Эта команда установит все необходимые пакеты зависимостей.

## Для запуска приложения необходимо использовать следующие команды командной строки:
1. yarn start-server (или npm start-server) для запуска сервера.
2. yarn start-client (или npm start-client) для запуска клиента.

## Как пользоваться приложением.

При запуске приложения вы увидите две кнопки "Movies" и "Tv-Shows".
Если вы нажмете одну из кнопок, то увидите список фильмов или телепередач и форму добавления. Это зависит от выбранных вами кнопок.
Если вы хотите добавить новый фильм или телешоу, вам следует заполнить форму добавления и нажать кнопку "Add". После этого в базу данных будет добавлен новый фильм или телешоу, и вы увидите новый фильм или телешоу в своем списке.
Если вы нажмете на элемент, то увидите описание, форму редактирования и две кнопки "Watch" и "Remove".
Если вы хотите отредактировать элемент, вы должны заполнить форму редактирования и нажать кнопку Edit. После этого отредактированный элемент будет обновлен в базе данных, и вы увидите отредактированный элемент.
Для просмотра текущего фильма или телепередачи вам необходимо выбрать его из списка и нажать кнопку "Watch".
Чтобы удалить текущий фильм или телешоу, вы должны выбрать его из списка и нажать кнопку "Remove".

### To launch the application, you should use the command's line following commands:
1. yarn start-server (or npm start-server) to launch the server.
2. yarn start-client (or npm start-client) to launch the client.

### How to use the application.

When the application launched you will see two buttons "Movies" and "Tv-Shows".
If you will press one of the buttons you will see a list of movies or tv-shows and an add form. It's up to your chosen buttons.
If you want to add a new movie or tv-show you should fill in the add form and press an add button. After that, a new movie or tv-show will be added to the database and you will see a new movie or tv-show in your list. 
If you press on the item you can see a description, an edit form and two buttons "Watch" and "Remove".
If you want to edit the item you should fill in the edit form end press an edit button. After that edited item will be updated in the database and you will see the edited item. 
To watching a current movie or tv-show you should choose it from a list and press button "Watch".
To remove a current movie or tv-show you should choose it from a list and press button "Remove".
