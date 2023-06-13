export default function Story(story) {
    return `
    <div class="story">
        <div>        
            <span class="gray">${story.index || ""}</span>
            <span class="upvote">▲</span>
            <a href="${story.url}" target="_blank">${story.title}</a>
            <span>(${story.domain})
        </div>
        <div>
            <div class="gray">
                ${story.points} points by ${story.user} ${story.time_ago} | 
                <a href="#/item?id=${story.id}">
                   ${story.comments_count} comments
                </a> |
                <span class="favorite">
                    <img src="https://icon.now.sh/heart/ccc" />
                    Add to favorites
                </span
            </div>
        </div>
    </div>`
}
