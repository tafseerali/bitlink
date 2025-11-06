# 🧠 Mantine 20% That’s Used 80% of the Time (Compared with HTML)

Learn just this 20%, and you’ll cover 80% of real-world Mantine usage — by understanding how Mantine maps to plain HTML.

---

## 🧱 1. Layout (Structure)

### 🧩 HTML
```html
<div></div>
<section></section>
```

### ⚡ Mantine
```jsx
<Container></Container>
<Group></Group>
<Stack></Stack>
<Grid></Grid>
```

| Mantine             | Acts Like                                                   | Used For                       |
| ------------------- | ----------------------------------------------------------- | ------------------------------ |
| `Container`         | `<div style="max-width:centered">`                          | Center and limit content width |
| `Group`             | `<div style="display:flex;gap:10px">`                       | Side-by-side items             |
| `Stack`             | `<div style="display:flex;flex-direction:column;gap:10px">` | Vertical stacking              |
| `Grid` / `Grid.Col` | `<div class="grid">`                                        | Multi-column layouts           |

👉 90% of the time, `Container + Stack + Group` = most of your layout needs.

---

## 🎨 2. Typography (Text & Headings)

### 🧩 HTML
```html
<h1>Title</h1>
<p>Some text</p>
```

### ⚡ Mantine
```jsx
<Title order={1}>Title</Title>
<Text>Some text</Text>
```

| Mantine             | HTML Equivalent | Benefit                             |
| ------------------- | --------------- | ----------------------------------- |
| `<Title order={1}>` | `<h1>`          | Automatically styled heading        |
| `<Text>`            | `<p>`           | Readable, theme-aware text          |
| `<Anchor>`          | `<a>`           | Looks modern, supports theme colors |

---

## 🧮 3. Buttons

### 🧩 HTML
```html
<button>Click Me</button>
```

### ⚡ Mantine
```jsx
<Button color="teal" radius="md" variant="filled">Click Me</Button>
```

| Mantine             | HTML Equivalent | Benefit                            |
| ------------------- | --------------- | ---------------------------------- |
| `<Button>`          | `<button>`      | Built-in hover, color, size, theme |
| `variant="outline"` | —               | Changes look instantly             |
| `radius="xl"`       | —               | Rounded corners easily             |

✅ You’ll use `<Button>` everywhere — just like `<button>` in HTML.

---

## 📋 4. Form Elements

| Mantine           | HTML Equivalent           | Purpose                              |
| ----------------- | ------------------------- | ------------------------------------ |
| `<TextInput>`     | `<input type="text">`     | Simple input with label, error, etc. |
| `<PasswordInput>` | `<input type="password">` | Password field with eye toggle       |
| `<Checkbox>`      | `<input type="checkbox">` | Themed checkbox                      |
| `<Select>`        | `<select>`                | Dropdown with styles                 |
| `<Textarea>`      | `<textarea>`              | Multi-line input                     |

### ⚡ Mantine Example
```jsx
<TextInput label="Email" placeholder="you@example.com" />
<PasswordInput label="Password" />
<Checkbox label="Remember me" />
```

👉 Mantine gives labels, validation, and spacing **for free** — no CSS required.

---

## ⚙️ 5. Feedback & Alerts

| Mantine                | HTML Equivalent         | Used For                    |
| ---------------------- | ----------------------- | --------------------------- |
| `<Alert>`              | `<div class="alert">`   | Warning or success messages |
| `<Loader>`             | `<div class="spinner">` | Loading indicator           |
| `notifications.show()` | —                       | Toast notifications         |

### ⚡ Mantine Example
```jsx
<Alert color="red" title="Error">Something went wrong!</Alert>
```

---

## 🌙 6. Theme (Color, Font, Dark Mode)

### 🧩 HTML
```html
<body class="dark">
```

### ⚡ Mantine
```jsx
<MantineProvider defaultColorScheme="light" theme={{ primaryColor: 'teal' }}>
```

✅ This one line gives:

- Automatic dark/light mode  
- Color palette  
- Global font and style setup  

---

## 🧠 7. Useful Hooks

| Hook                      | HTML/JS Equivalent          | What it does               |
| ------------------------- | --------------------------- | -------------------------- |
| `useDisclosure()`         | `isOpen` + toggle functions | Open/close modals, drawers |
| `useForm()`               | Manual form handling        | Input state + validation   |
| `useMantineColorScheme()` | Dark/light toggle           | Switch theme easily        |

### ⚡ Mantine Example
```jsx
const [opened, { open, close }] = useDisclosure(false);
```

---

## 🧭 Summary (Your 20%)

| Category | Components to Learn                      | HTML Equivalent        |
| -------- | ---------------------------------------- | ---------------------- |
| Layout   | `Container`, `Group`, `Stack`, `Grid`    | `<div>`                |
| Text     | `Title`, `Text`, `Anchor`                | `<h1>`, `<p>`, `<a>`   |
| Buttons  | `Button`                                 | `<button>`             |
| Forms    | `TextInput`, `PasswordInput`, `Checkbox` | `<input>`              |
| Alerts   | `Alert`, `Notification`, `Loader`        | `<div class="alert">`  |
| Theme    | `MantineProvider`, `ColorSchemeScript`   | `<body class="light">` |

---

> 🎯 **Tip:**  
> If you master these components, you can build most real-world dashboards, forms, and UIs — without needing any CSS.
