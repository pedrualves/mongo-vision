
//
// Copyright 2010 Three Crickets LLC.
//
// The contents of this file are subject to the terms of the GPL version 3.0:
// http://www.opensource.org/licenses/gpl-3.0.html
// 
// Alternatively, you can obtain a royalty free commercial license with less
// limitations, transferable or non-transferable, directly from Three Crickets
// at http://threecrickets.com/
//

document.execute('defaults/application/routing/')

router.capture('data/db/{database}/{collection}/', 'data/db/collection/')
router.capture('data/db/{database}/{collection}/{id}', 'data/db/collection/document/')