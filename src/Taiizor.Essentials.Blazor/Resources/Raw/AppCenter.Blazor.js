console.log('%cAppCenter Blazor Javascript has started.', 'color: #1E90FF');


var AppCenter = {};


AppCenter.Track = {};
AppCenter.Track.Event = {};
AppCenter.Track.Error = {};


AppCenter.Watch = {};
AppCenter.Watch.Event = {};
AppCenter.Watch.Error = {};



AppCenter.Track.Event.Basic = function (Name) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackEventBasic", Name);
}

AppCenter.Track.Event.Normal = function (Name, Key, Value) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackEventNormal", Name, Key, Value);
}

AppCenter.Track.Event.Advanced = function (Name, Properties) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackEventAdvanced", Name, Properties);
}


AppCenter.Watch.Event.Basic = function (Name) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchEventBasic", Name);
}

AppCenter.Watch.Event.Normal = function (Name, Key, Value) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchEventNormal", Name, Key, Value);
}

AppCenter.Watch.Event.Advanced = function (Name, Properties) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchEventAdvanced", Name, Properties);
}



AppCenter.Track.Error.Basic = function (Exception) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackErrorBasic", Exception);
}

AppCenter.Track.Error.Normal = function (Exception, Key, Value) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackErrorNormal", Exception, Key, Value);
}

AppCenter.Track.Error.Advanced = function (Exception, Properties) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackErrorAdvanced", Exception, Properties);
}

AppCenter.Track.Error.Hard = function (Exception, Properties, Text, TextFile, Image, ImageFile, Extension) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackErrorHard", Exception, Properties, Text, TextFile, Image, ImageFile, Extension);
}

AppCenter.Track.Error.Expert = function (Exception, Properties, Text, TextFile, Image, ImageFile, Extension) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackErrorExpert", Exception, Properties, Text, TextFile, Image, ImageFile, Extension);
}

AppCenter.Track.Error.God = function (Exception, Properties, Attachments) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "TrackErrorGod", Exception, Properties, Attachments);
}


AppCenter.Watch.Error.Baby = function (Name) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchErrorBaby", Name);
}

AppCenter.Watch.Error.Basic = function (Exception) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchErrorBasic", Exception);
}

AppCenter.Watch.Error.Normal = function (Exception, Key, Value) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchErrorNormal", Exception, Key, Value);
}

AppCenter.Watch.Error.Advanced = function (Exception, Properties) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchErrorAdvanced", Exception, Properties);
}

AppCenter.Watch.Error.Hard = function (Exception, Properties, Attachments) {
    Taiizor.Invoke.MethodAsync("Taiizor.Essentials.Blazor.AppCenter", "WatchErrorHard", Exception, Properties, Attachments);
}