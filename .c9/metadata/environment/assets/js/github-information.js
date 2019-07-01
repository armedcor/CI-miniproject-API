{"changed":true,"filter":false,"title":"github-information.js","tooltip":"/assets/js/github-information.js","value":"function userInformationHTML(user) {\n    return `\n    <h2>${user.name}\n        <span class=\"small-name\">\n            (@<a href=\"${user.html_url}\" target=\"_blank\">${user.login}</a>)\n        </span>\n     </h2>\n    <div class=\"gh-content\">\n       <div class=\"gh-avatar\">\n         <a href=\"${user.html_url} target=\"_blank\">\n             <img src=\"${user.avatar_url}\" width=\"80\" height=\"80\" alt=\"${user.login}\" />\n         </a>\n       </div>\n       <p>Followers: ${user.followers} - Following ${user.following} <br> Repos: ${user.public_repos}</p>\n    </div>`;\n}\n\n\nfunction repoInformationHTML(repos) {\n    if (repos.length == 0) {\n        return `<div class=\"clearfix repo-list\">No repos!</div>;`\n    }\n\n    var listItemsHTML = repos.map(function(repo) {\n        return `<li>\n                   <a href=\"${repo.html_url}\" target=\"_blank\">${repo.name}</a>\n                </li>`;\n    });\n\n    return `<div class=\"clearfix repo-list\">\n    <p>\n    <strong>Repo List:</strong>\n    </p>\n    <ul>\n       ${listItemsHTML.join(\"\\n\")}\n       </ul>\n    </div>`;\n}\n\nfunction fetchGitHubInformation(event) {\n\n    var username = $(\"#gh-username\").val();\n    if (!username) {\n        $(\"#gh-user-data\").html(`<h2>Please enter a GitHub username</h2>`);\n        return;\n    }\n\n    $(\"#gh-user-data\").html(\n        `<div id=\"loader\">\n            <img src=\"assets/css/loader.gif\" alt=\"loading...\" />\n        </div>`);\n\n    $.when(\n        $.getJSON(`https://api.github.com/users/${username}`),\n        $.getJSON(`https://api.github.com/users/${username}/repos`)\n    ).then(\n        function(firstResponse, secondResponse) {\n            var userData = firstResponse[0];\n            var repoData = secondResponse[0];\n            $(\"#gh-user-data\").html(userInformationHTML(userData));\n            $(\"#gh-repo-data\").html(repoInformationHTML(repoData));\n        },\n        function(errorResponse) {\n            if (errorResponse.status === 404) {\n                $(\"#gh-user-data\").html(\n                    `<h2>No info found for user ${username}</h2>`);\n            }\n            else {\n                console.log(errorResponse);\n                $(\"#gh-user-data\").html(\n                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);\n            }\n        });\n}\n","undoManager":{"mark":99,"position":100,"stack":[[{"start":{"row":20,"column":35},"end":{"row":20,"column":36},"action":"insert","lines":["x"],"id":458}],[{"start":{"row":20,"column":36},"end":{"row":20,"column":37},"action":"insert","lines":[" "],"id":459},{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"insert","lines":["r"]},{"start":{"row":20,"column":38},"end":{"row":20,"column":39},"action":"insert","lines":["e"]},{"start":{"row":20,"column":39},"end":{"row":20,"column":40},"action":"insert","lines":["p"]},{"start":{"row":20,"column":40},"end":{"row":20,"column":41},"action":"insert","lines":["o"]},{"start":{"row":20,"column":41},"end":{"row":20,"column":42},"action":"insert","lines":["-"]},{"start":{"row":20,"column":42},"end":{"row":20,"column":43},"action":"insert","lines":["l"]}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"insert","lines":["i"],"id":460},{"start":{"row":20,"column":44},"end":{"row":20,"column":45},"action":"insert","lines":["s"]},{"start":{"row":20,"column":45},"end":{"row":20,"column":46},"action":"insert","lines":["t"]}],[{"start":{"row":20,"column":46},"end":{"row":20,"column":47},"action":"insert","lines":["\""],"id":461},{"start":{"row":20,"column":47},"end":{"row":20,"column":48},"action":"insert","lines":[">"]}],[{"start":{"row":20,"column":48},"end":{"row":20,"column":49},"action":"insert","lines":["N"],"id":462},{"start":{"row":20,"column":49},"end":{"row":20,"column":50},"action":"insert","lines":["o"]}],[{"start":{"row":20,"column":50},"end":{"row":20,"column":51},"action":"insert","lines":[" "],"id":463},{"start":{"row":20,"column":51},"end":{"row":20,"column":52},"action":"insert","lines":["r"]},{"start":{"row":20,"column":52},"end":{"row":20,"column":53},"action":"insert","lines":["e"]},{"start":{"row":20,"column":53},"end":{"row":20,"column":54},"action":"insert","lines":["p"]},{"start":{"row":20,"column":54},"end":{"row":20,"column":55},"action":"insert","lines":["o"]},{"start":{"row":20,"column":55},"end":{"row":20,"column":56},"action":"insert","lines":["s"]}],[{"start":{"row":20,"column":56},"end":{"row":20,"column":57},"action":"insert","lines":["!"],"id":464},{"start":{"row":20,"column":57},"end":{"row":20,"column":58},"action":"insert","lines":["<"]},{"start":{"row":20,"column":58},"end":{"row":20,"column":59},"action":"insert","lines":["/"]}],[{"start":{"row":20,"column":59},"end":{"row":20,"column":60},"action":"insert","lines":["d"],"id":465},{"start":{"row":20,"column":60},"end":{"row":20,"column":61},"action":"insert","lines":["i"]},{"start":{"row":20,"column":61},"end":{"row":20,"column":62},"action":"insert","lines":["v"]},{"start":{"row":20,"column":62},"end":{"row":20,"column":63},"action":"insert","lines":[">"]}],[{"start":{"row":20,"column":63},"end":{"row":20,"column":64},"action":"insert","lines":[";"],"id":466}],[{"start":{"row":20,"column":64},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":467},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":8},"action":"remove","lines":["    "],"id":468},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":64},"end":{"row":21,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":21,"column":5},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":469},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":4},"end":{"row":23,"column":0},"action":"insert","lines":["",""]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]},{"start":{"row":23,"column":4},"end":{"row":23,"column":5},"action":"insert","lines":["v"]},{"start":{"row":23,"column":5},"end":{"row":23,"column":6},"action":"insert","lines":["a"]},{"start":{"row":23,"column":6},"end":{"row":23,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":23,"column":7},"end":{"row":23,"column":8},"action":"insert","lines":[" "],"id":470},{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"insert","lines":["l"]},{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"insert","lines":["i"]},{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["I"],"id":471},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["t"]},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["e"]},{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["m"]}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"remove","lines":["m"],"id":472},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"remove","lines":["e"]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"remove","lines":["t"]},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"remove","lines":["I"]}],[{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["t"],"id":473},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["I"]},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["t"]},{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["e"]},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["m"]},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"insert","lines":["H"],"id":474},{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"insert","lines":["T"]},{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["M"]},{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["L"]}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":[" "],"id":475},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["="]}],[{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":[" "],"id":476},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["r"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["e"]},{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["p"]},{"start":{"row":23,"column":27},"end":{"row":23,"column":28},"action":"insert","lines":["o"]},{"start":{"row":23,"column":28},"end":{"row":23,"column":29},"action":"insert","lines":["s"]},{"start":{"row":23,"column":29},"end":{"row":23,"column":30},"action":"insert","lines":["."]}],[{"start":{"row":23,"column":30},"end":{"row":23,"column":31},"action":"insert","lines":["m"],"id":477},{"start":{"row":23,"column":31},"end":{"row":23,"column":32},"action":"insert","lines":["a"]},{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"insert","lines":["p"]}],[{"start":{"row":23,"column":33},"end":{"row":23,"column":35},"action":"insert","lines":["()"],"id":478}],[{"start":{"row":23,"column":34},"end":{"row":23,"column":35},"action":"insert","lines":["f"],"id":479},{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":["u"]},{"start":{"row":23,"column":36},"end":{"row":23,"column":37},"action":"insert","lines":["n"]},{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"insert","lines":["c"]},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"insert","lines":["t"]},{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"insert","lines":["i"]},{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"insert","lines":["o"]},{"start":{"row":23,"column":41},"end":{"row":23,"column":42},"action":"insert","lines":["n"]}],[{"start":{"row":23,"column":42},"end":{"row":23,"column":44},"action":"insert","lines":["()"],"id":480}],[{"start":{"row":23,"column":43},"end":{"row":23,"column":44},"action":"insert","lines":["r"],"id":481},{"start":{"row":23,"column":44},"end":{"row":23,"column":45},"action":"insert","lines":["e"]},{"start":{"row":23,"column":45},"end":{"row":23,"column":46},"action":"insert","lines":["p"]},{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"insert","lines":["o"]}],[{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"insert","lines":[" "],"id":482}],[{"start":{"row":23,"column":49},"end":{"row":23,"column":51},"action":"insert","lines":["{}"],"id":483}],[{"start":{"row":23,"column":50},"end":{"row":25,"column":4},"action":"insert","lines":["","        ","    "],"id":484}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":9},"action":"insert","lines":["r"],"id":485},{"start":{"row":24,"column":9},"end":{"row":24,"column":10},"action":"insert","lines":["e"]},{"start":{"row":24,"column":10},"end":{"row":24,"column":11},"action":"insert","lines":["t"]},{"start":{"row":24,"column":11},"end":{"row":24,"column":12},"action":"insert","lines":["u"]},{"start":{"row":24,"column":12},"end":{"row":24,"column":13},"action":"insert","lines":["r"]},{"start":{"row":24,"column":13},"end":{"row":24,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":24,"column":14},"end":{"row":24,"column":15},"action":"insert","lines":[" "],"id":486}],[{"start":{"row":24,"column":15},"end":{"row":24,"column":17},"action":"insert","lines":["``"],"id":487}],[{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"insert","lines":["<"],"id":488},{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"insert","lines":["l"]},{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["i"]},{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"insert","lines":[">"]}],[{"start":{"row":24,"column":20},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":489},{"start":{"row":25,"column":0},"end":{"row":25,"column":8},"action":"insert","lines":["        "]},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":[" "]},{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":[" "]},{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":[" "]},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":[" "]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":[" "]},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":[" "]},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":[" "]},{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":[" "]},{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":[" "]},{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":[" "]},{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":[" "]},{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":[" "]},{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":[" "]},{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":[" "]},{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":[" "]},{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":[" "]},{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":[" "]}],[{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"remove","lines":[" "],"id":490},{"start":{"row":25,"column":20},"end":{"row":25,"column":24},"action":"remove","lines":["    "]},{"start":{"row":25,"column":16},"end":{"row":25,"column":20},"action":"remove","lines":["    "]}],[{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":[" "],"id":491},{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":[" "]},{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":[" "]},{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["<"]},{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":["a"]}],[{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":[" "],"id":492},{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["h"]},{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":["r"]},{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":["e"]},{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":["f"]}],[{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["="],"id":493},{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":["\""]},{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"insert","lines":["$"]}],[{"start":{"row":25,"column":29},"end":{"row":25,"column":30},"action":"insert","lines":["{"],"id":494},{"start":{"row":25,"column":30},"end":{"row":25,"column":31},"action":"insert","lines":["r"]},{"start":{"row":25,"column":31},"end":{"row":25,"column":32},"action":"insert","lines":["e"]},{"start":{"row":25,"column":32},"end":{"row":25,"column":33},"action":"insert","lines":["p"]},{"start":{"row":25,"column":33},"end":{"row":25,"column":34},"action":"insert","lines":["o"]}],[{"start":{"row":25,"column":34},"end":{"row":25,"column":35},"action":"insert","lines":["."],"id":495},{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["h"]},{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["t"]},{"start":{"row":25,"column":37},"end":{"row":25,"column":38},"action":"insert","lines":["m"]},{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":["l"]},{"start":{"row":25,"column":39},"end":{"row":25,"column":40},"action":"insert","lines":["_"]}],[{"start":{"row":25,"column":40},"end":{"row":25,"column":41},"action":"insert","lines":["u"],"id":496},{"start":{"row":25,"column":41},"end":{"row":25,"column":42},"action":"insert","lines":["r"]},{"start":{"row":25,"column":42},"end":{"row":25,"column":43},"action":"insert","lines":["l"]}],[{"start":{"row":25,"column":43},"end":{"row":25,"column":44},"action":"insert","lines":["}"],"id":497}],[{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"insert","lines":[" "],"id":498}],[{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"remove","lines":[" "],"id":499}],[{"start":{"row":25,"column":44},"end":{"row":25,"column":45},"action":"insert","lines":["\""],"id":500}],[{"start":{"row":25,"column":45},"end":{"row":25,"column":46},"action":"insert","lines":[" "],"id":501},{"start":{"row":25,"column":46},"end":{"row":25,"column":47},"action":"insert","lines":["t"]},{"start":{"row":25,"column":47},"end":{"row":25,"column":48},"action":"insert","lines":["a"]},{"start":{"row":25,"column":48},"end":{"row":25,"column":49},"action":"insert","lines":["r"]}],[{"start":{"row":25,"column":49},"end":{"row":25,"column":50},"action":"insert","lines":["g"],"id":502},{"start":{"row":25,"column":50},"end":{"row":25,"column":51},"action":"insert","lines":["e"]},{"start":{"row":25,"column":51},"end":{"row":25,"column":52},"action":"insert","lines":["t"]},{"start":{"row":25,"column":52},"end":{"row":25,"column":53},"action":"insert","lines":["="]}],[{"start":{"row":25,"column":53},"end":{"row":25,"column":54},"action":"insert","lines":["\""],"id":503},{"start":{"row":25,"column":54},"end":{"row":25,"column":55},"action":"insert","lines":["_"]},{"start":{"row":25,"column":55},"end":{"row":25,"column":56},"action":"insert","lines":["b"]},{"start":{"row":25,"column":56},"end":{"row":25,"column":57},"action":"insert","lines":["l"]},{"start":{"row":25,"column":57},"end":{"row":25,"column":58},"action":"insert","lines":["a"]},{"start":{"row":25,"column":58},"end":{"row":25,"column":59},"action":"insert","lines":["n"]},{"start":{"row":25,"column":59},"end":{"row":25,"column":60},"action":"insert","lines":["k"]}],[{"start":{"row":25,"column":60},"end":{"row":25,"column":61},"action":"insert","lines":["\""],"id":504}],[{"start":{"row":25,"column":61},"end":{"row":25,"column":62},"action":"insert","lines":[">"],"id":505},{"start":{"row":25,"column":62},"end":{"row":25,"column":63},"action":"insert","lines":["$"]}],[{"start":{"row":25,"column":63},"end":{"row":25,"column":64},"action":"insert","lines":["<"],"id":506}],[{"start":{"row":25,"column":63},"end":{"row":25,"column":64},"action":"remove","lines":["<"],"id":507}],[{"start":{"row":25,"column":63},"end":{"row":25,"column":64},"action":"insert","lines":["{"],"id":508},{"start":{"row":25,"column":64},"end":{"row":25,"column":65},"action":"insert","lines":["r"]}],[{"start":{"row":25,"column":65},"end":{"row":25,"column":66},"action":"insert","lines":["e"],"id":509},{"start":{"row":25,"column":66},"end":{"row":25,"column":67},"action":"insert","lines":["p"]},{"start":{"row":25,"column":67},"end":{"row":25,"column":68},"action":"insert","lines":["o"]},{"start":{"row":25,"column":68},"end":{"row":25,"column":69},"action":"insert","lines":["."]},{"start":{"row":25,"column":69},"end":{"row":25,"column":70},"action":"insert","lines":["n"]},{"start":{"row":25,"column":70},"end":{"row":25,"column":71},"action":"insert","lines":["a"]},{"start":{"row":25,"column":71},"end":{"row":25,"column":72},"action":"insert","lines":["m"]},{"start":{"row":25,"column":72},"end":{"row":25,"column":73},"action":"insert","lines":["e"]}],[{"start":{"row":25,"column":73},"end":{"row":25,"column":74},"action":"insert","lines":["}"],"id":510},{"start":{"row":25,"column":74},"end":{"row":25,"column":75},"action":"insert","lines":["<"]}],[{"start":{"row":25,"column":75},"end":{"row":25,"column":76},"action":"insert","lines":["/"],"id":511},{"start":{"row":25,"column":76},"end":{"row":25,"column":77},"action":"insert","lines":["a"]},{"start":{"row":25,"column":77},"end":{"row":25,"column":78},"action":"insert","lines":[">"]}],[{"start":{"row":25,"column":78},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":512},{"start":{"row":26,"column":0},"end":{"row":26,"column":19},"action":"insert","lines":["                   "]}],[{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"remove","lines":[" "],"id":513},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"remove","lines":[" "]},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"remove","lines":[" "]}],[{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["<"],"id":514},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["/"]},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["l"]},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["i"]},{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":[">"]}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":[";"],"id":515}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":[";"],"id":516}],[{"start":{"row":27,"column":7},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":517},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]},{"start":{"row":28,"column":4},"end":{"row":29,"column":0},"action":"insert","lines":["",""]},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"insert","lines":["    "]},{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"insert","lines":["r"]},{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"insert","lines":["e"]},{"start":{"row":29,"column":6},"end":{"row":29,"column":7},"action":"insert","lines":["t"]},{"start":{"row":29,"column":7},"end":{"row":29,"column":8},"action":"insert","lines":["u"]},{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["r"]},{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["n"]}],[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":[" "],"id":518}],[{"start":{"row":29,"column":11},"end":{"row":29,"column":13},"action":"insert","lines":["``"],"id":519}],[{"start":{"row":29,"column":12},"end":{"row":29,"column":13},"action":"insert","lines":["<"],"id":520},{"start":{"row":29,"column":13},"end":{"row":29,"column":14},"action":"insert","lines":["d"]},{"start":{"row":29,"column":14},"end":{"row":29,"column":15},"action":"insert","lines":["i"]},{"start":{"row":29,"column":15},"end":{"row":29,"column":16},"action":"insert","lines":["v"]}],[{"start":{"row":29,"column":16},"end":{"row":29,"column":17},"action":"insert","lines":[" "],"id":521},{"start":{"row":29,"column":17},"end":{"row":29,"column":18},"action":"insert","lines":["c"]},{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":["l"]},{"start":{"row":29,"column":19},"end":{"row":29,"column":20},"action":"insert","lines":["a"]},{"start":{"row":29,"column":20},"end":{"row":29,"column":21},"action":"insert","lines":["s"]},{"start":{"row":29,"column":21},"end":{"row":29,"column":22},"action":"insert","lines":["s"]},{"start":{"row":29,"column":22},"end":{"row":29,"column":23},"action":"insert","lines":["="]}],[{"start":{"row":29,"column":23},"end":{"row":29,"column":24},"action":"insert","lines":["\""],"id":522},{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":["c"]},{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"insert","lines":["l"]},{"start":{"row":29,"column":26},"end":{"row":29,"column":27},"action":"insert","lines":["e"]},{"start":{"row":29,"column":27},"end":{"row":29,"column":28},"action":"insert","lines":["a"]},{"start":{"row":29,"column":28},"end":{"row":29,"column":29},"action":"insert","lines":["r"]}],[{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"insert","lines":["f"],"id":523},{"start":{"row":29,"column":30},"end":{"row":29,"column":31},"action":"insert","lines":["i"]},{"start":{"row":29,"column":31},"end":{"row":29,"column":32},"action":"insert","lines":["x"]}],[{"start":{"row":29,"column":32},"end":{"row":29,"column":33},"action":"insert","lines":[" "],"id":524},{"start":{"row":29,"column":33},"end":{"row":29,"column":34},"action":"insert","lines":["r"]},{"start":{"row":29,"column":34},"end":{"row":29,"column":35},"action":"insert","lines":["e"]},{"start":{"row":29,"column":35},"end":{"row":29,"column":36},"action":"insert","lines":["p"]},{"start":{"row":29,"column":36},"end":{"row":29,"column":37},"action":"insert","lines":["o"]},{"start":{"row":29,"column":37},"end":{"row":29,"column":38},"action":"insert","lines":["-"]},{"start":{"row":29,"column":38},"end":{"row":29,"column":39},"action":"insert","lines":["l"]},{"start":{"row":29,"column":39},"end":{"row":29,"column":40},"action":"insert","lines":["i"]},{"start":{"row":29,"column":40},"end":{"row":29,"column":41},"action":"insert","lines":["s"]}],[{"start":{"row":29,"column":41},"end":{"row":29,"column":42},"action":"insert","lines":["t"],"id":525}],[{"start":{"row":29,"column":42},"end":{"row":29,"column":43},"action":"insert","lines":["\""],"id":526},{"start":{"row":29,"column":43},"end":{"row":29,"column":44},"action":"insert","lines":[">"]}],[{"start":{"row":29,"column":44},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":527},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]},{"start":{"row":30,"column":4},"end":{"row":31,"column":0},"action":"insert","lines":["",""]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "]},{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"insert","lines":["<"]},{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":31,"column":6},"end":{"row":31,"column":7},"action":"insert","lines":["d"],"id":528},{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["i"]},{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["v"]},{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"insert","lines":[">"]}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["<"],"id":529},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["p"]},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":[">"]}],[{"start":{"row":30,"column":7},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":530},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"insert","lines":["    "]},{"start":{"row":31,"column":4},"end":{"row":31,"column":5},"action":"insert","lines":["<"]},{"start":{"row":31,"column":5},"end":{"row":31,"column":6},"action":"insert","lines":["s"]},{"start":{"row":31,"column":6},"end":{"row":31,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["r"],"id":531},{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["o"]},{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"insert","lines":["n"]},{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"insert","lines":["g"]},{"start":{"row":31,"column":11},"end":{"row":31,"column":12},"action":"insert","lines":[">"]}],[{"start":{"row":31,"column":12},"end":{"row":31,"column":13},"action":"insert","lines":["R"],"id":532},{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"insert","lines":["e"]},{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["p"]},{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["o"]}],[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":[" "],"id":533},{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["L"]},{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["i"]},{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["s"]},{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["t"]}],[{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"insert","lines":[":"],"id":534}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":[","],"id":535}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"remove","lines":[","],"id":536}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":["<"],"id":537},{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"insert","lines":["/"]},{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"insert","lines":["s"]},{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"insert","lines":["t"]},{"start":{"row":31,"column":26},"end":{"row":31,"column":27},"action":"insert","lines":["r"]},{"start":{"row":31,"column":27},"end":{"row":31,"column":28},"action":"insert","lines":["o"]},{"start":{"row":31,"column":28},"end":{"row":31,"column":29},"action":"insert","lines":["n"]},{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":["g"]},{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"insert","lines":[">"]}],[{"start":{"row":31,"column":31},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":538},{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "]},{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["<"]},{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["/"]},{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":["p"]}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":[">"],"id":539}],[{"start":{"row":32,"column":8},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":540},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":33,"column":4},"end":{"row":33,"column":5},"action":"insert","lines":["<"],"id":541}],[{"start":{"row":33,"column":5},"end":{"row":33,"column":6},"action":"insert","lines":["u"],"id":542},{"start":{"row":33,"column":6},"end":{"row":33,"column":7},"action":"insert","lines":["l"]},{"start":{"row":33,"column":7},"end":{"row":33,"column":8},"action":"insert","lines":[">"]}],[{"start":{"row":33,"column":8},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":543},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":4},"end":{"row":34,"column":5},"action":"insert","lines":[" "]},{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"insert","lines":[" "]},{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":[" "]}],[{"start":{"row":34,"column":7},"end":{"row":34,"column":8},"action":"insert","lines":["$"],"id":544},{"start":{"row":34,"column":8},"end":{"row":34,"column":9},"action":"insert","lines":["{"]}],[{"start":{"row":34,"column":9},"end":{"row":34,"column":10},"action":"insert","lines":["l"],"id":545},{"start":{"row":34,"column":10},"end":{"row":34,"column":11},"action":"insert","lines":["i"]},{"start":{"row":34,"column":11},"end":{"row":34,"column":12},"action":"insert","lines":["s"]},{"start":{"row":34,"column":12},"end":{"row":34,"column":13},"action":"insert","lines":["t"]},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["e"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"insert","lines":["m"]}],[{"start":{"row":34,"column":14},"end":{"row":34,"column":15},"action":"remove","lines":["m"],"id":546},{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"remove","lines":["e"]}],[{"start":{"row":34,"column":13},"end":{"row":34,"column":14},"action":"insert","lines":["I"],"id":547}],[{"start":{"row":34,"column":9},"end":{"row":34,"column":14},"action":"remove","lines":["listI"],"id":548},{"start":{"row":34,"column":9},"end":{"row":34,"column":22},"action":"insert","lines":["listItemsHTML"]}],[{"start":{"row":34,"column":22},"end":{"row":34,"column":23},"action":"insert","lines":["."],"id":549},{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["j"]},{"start":{"row":34,"column":24},"end":{"row":34,"column":25},"action":"insert","lines":["o"]},{"start":{"row":34,"column":25},"end":{"row":34,"column":26},"action":"insert","lines":["i"]}],[{"start":{"row":34,"column":26},"end":{"row":34,"column":27},"action":"insert","lines":["n"],"id":550}],[{"start":{"row":34,"column":27},"end":{"row":34,"column":29},"action":"insert","lines":["()"],"id":551}],[{"start":{"row":34,"column":28},"end":{"row":34,"column":30},"action":"insert","lines":["\"\""],"id":552}],[{"start":{"row":34,"column":29},"end":{"row":34,"column":30},"action":"insert","lines":["\\"],"id":553},{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["n"]}],[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["}"],"id":554}],[{"start":{"row":34,"column":34},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":555},{"start":{"row":35,"column":0},"end":{"row":35,"column":7},"action":"insert","lines":["       "]},{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"insert","lines":["<"]},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["/"]},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["u"]},{"start":{"row":35,"column":10},"end":{"row":35,"column":11},"action":"insert","lines":["l"]}],[{"start":{"row":35,"column":11},"end":{"row":35,"column":12},"action":"insert","lines":[">"],"id":556}],[{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":[";"],"id":557}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"remove","lines":["    "],"id":558},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]}]]},"ace":{"folds":[],"scrolltop":97,"scrollleft":0,"selection":{"start":{"row":36,"column":12},"end":{"row":36,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":["string.quasi.start","no_regex"],"mode":"ace/mode/javascript"}},"timestamp":1561970106512}