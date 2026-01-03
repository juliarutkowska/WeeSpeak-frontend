const lessons = [
    { day: "Monday", time: "16:00", group: "4–6 years", level: "Starter" },
    { day: "Tuesday", time: "17:00", group: "7–9 years", level: "Kids" },
    { day: "Wednesday", time: "18:00", group: "10–12 years", level: "Junior" },
    { day: "Thursday", time: "18:30", group: "Exam preparation", level: "8th grade" },
    { day: "Friday", time: "16:30", group: "Teen group", level: "A2/B1" },
];

const dayFilter = document.getElementById("dayFilter");
const searchInput = document.getElementById("searchInput");
const scheduleList = document.getElementById("scheduleList");

function render(items) {
    scheduleList.innerHTML = "";

    if (items.length === 0) {
        const p = document.createElement("p");
        p.textContent = "No lessons found.";
        scheduleList.appendChild(p);
        return;
    }

    items.forEach((x) => {
        const div = document.createElement("div");
        div.className = "lesson";

        const title = document.createElement("div");
        title.innerHTML = `<strong>${x.day}</strong> • ${x.time} • ${x.group}`;

        const meta = document.createElement("div");
        meta.className = "muted";
        meta.innerHTML = `<span class="badge">${x.level}</span>`;

        div.appendChild(title);
        div.appendChild(meta);
        scheduleList.appendChild(div);
    });
}

function applyFilters() {
    const day = dayFilter.value;
    const q = searchInput.value.trim().toLowerCase();

    const filtered = lessons.filter((x) => {
        const matchesDay = day === "all" ? true : x.day === day;
        const matchesQuery =
            q.length === 0 ? true : (x.group + " " + x.level).toLowerCase().includes(q);
        return matchesDay && matchesQuery;
    });

    render(filtered);
}

dayFilter.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

render(lessons);
